import React, { useState } from 'react';
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import './CodeViewer.css';
import ResponsiveAppBar from './App-bar';
import { useMode } from '../theme';
import {ThemeProvider} from "@mui/material"


function CodeViewer(props) {
  const [text, setText] = useState(`
  def decode_base64(data):
  img = base64.b64decode(data)
  # img = cv2.imdecode(np.fromstring(img, np.uint8), cv2.IMREAD_COLOR)
  img = np.asarray(Image.open(BytesIO(base64.b64decode(data))))[:, :, [2, 1, 0]]
  img = img.transpose((2, 0, 1))
  img = img.reshape(1, 3, 224, 224)
  return img


# preprocess image
def preprocess(img_data):
  mean_vec = np.array([0.485, 0.456, 0.406])
  stddev_vec = np.array([0.229, 0.224, 0.225])
  norm_img_data = np.zeros(img_data.shape).astype('float32')
  for i in range(img_data.shape[0]):
      # for each pixel and channel
      # divide the value by 255 to get value between [0, 1]
      norm_img_data[i, :, :] = (img_data[i, :, :] / 255 - mean_vec[i]) / stddev_vec[i]
  return norm_img_data


# load text file as list

def load_labels(path):
  labels = []
  with open(path, 'r') as f:
      for line in f:
          labels.append(line.strip())
  return labels


# map mobilenet outputs to classes
def map_outputs(outputs, basepath):
  labels = load_labels(basepath + 'dependencies/data/imagenet_classes.txt')
  return labels[np.argmax(outputs)]


def run_model(model_path, img):
  inference_session_create_start = int(time.time() * 1000)
  ort_sess = ort.InferenceSession(model_path)
  inference_session_create_end = int(time.time() * 1000)

  input_name = ort_sess.get_inputs()[0].name

  model_run_start = int(time.time() * 1000)
  outputs = ort_sess.run(None, {input_name: img})
  model_run_end = int(time.time() * 1000)

  return outputs, inference_session_create_end - inference_session_create_start, model_run_end - model_run_start

  def function(serwoObject) -> SerWOObject:
  try:
      ret_str_25KB = "hfIlbIHdN9X6fW7LMhqlGbdiE9yM6LJle8ismKMoavUGLjR53tcmv0AyNweDtAs8ayFL3CIDBOqhzKadmbBy5TVkQbHiq2IQ8seUMF3SoX3SGTN2ETloowLZHXsgv2VvYngyVf58QipvkiNFAgezVY6O4x5J8DR8vM0254z4nxxAH97RSBfirJ1hLzRbcoDena5qcqqlSBYS5gXOIJS4ixgEUBSgBtR5u7UsJzUIv7yWoez2N30H
      img = decode_base64(img_base64)
      img = preprocess(img)
      basepath = serwoObject.get_basepath()
      print(f'basepath = {basepath}')
      model_path = basepath + 'dependencies/model/resnet50v2.onnx'
      outputs = run_model(model_path, img)
      # model_path = 'resnet50v2.onnx'

      outputs, inference_session_create_time, model_run_time = run_model(model_path, img)

      map_outputs_start = int(time.time() * 1000)
      image_class = map_outputs(outputs, basepath=basepath)
      map_outputs_end = int(time.time() * 1000)
      map_outputs_time = map_outputs_end - map_outputs_start

      resnet_end_timestamp = int(time.time() * 1000)
      e2etime = resnet_end_timestamp - resnet_start_timestamp

      resnet_time = dict(e2etime=e2etime,
                         inference_session_create_time=inference_session_create_time,
                         model_run_time=model_run_time,
                         map_outputs_time=map_outputs_time)
      ret_val = {"dummy_data": ret_str_25KB}
      print('finished executing resnet')

      s = SerWOObject(body=ret_val)
      return s


  except Exception as e:
      print('in resnet ',e)
      return None

  `);

  const handleTextChange = (event) => {
    setText(event.target.textContent);
  };

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const [theme]=useMode();

  return(

  <ThemeProvider theme={theme}>
   
    <div>
     
        <ResponsiveAppBar />
    
      <div className="codeViewer">
        <body>
          <h4 className="fid">Func_ID</h4>
          <button className="copybtn" onClick={copyToClipboard}>
            {copied ? 'Copied!' : 'Copy to Clipboard'}
            <svg
              className="copybtnimg"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
          </button>
        </body>
     
             <div className="mainCode">
                    <SyntaxHighlighter showLineNumbers="true" style={duotoneDark} language="python">
                        {text}
                    </SyntaxHighlighter>           

            </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default CodeViewer;
