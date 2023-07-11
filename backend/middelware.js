
var input = {
	"Nodes": {
		"L": [
			{
				"M": {
					"NodeId": {
						"S": "1"
					},
					"NodeName": {
						"S": "TaskA"
					},
					"Path": {
						"S": "examples/smart-grid-fusion-aws/src/xmlparse_23KB_25KB"
					},
					"EntryPoint": {
						"S": "func.py"
					},
					"CSP": {
						"S": "Azure"
					},
					"MemoryInMB": {
						"N": "128"
					}
				}
			},
			{
				"M": {
					"NodeId": {
						"S": "2"
					},
					"NodeName": {
						"S": "TaskB"
					},
					"Path": {
						"S": "examples/smart-grid-fusion-aws/src/memstress_128MB_25KB"
					},
					"EntryPoint": {
						"S": "func.py"
					},
					"CSP": {
						"S": "Azure"
					},
					"MemoryInMB": {
						"N": "256"
					}
				}
			},
			{
				"M": {
					"NodeId": {
						"S": "3"
					},
					"NodeName": {
						"S": "TaskC"
					},
					"Path": {
						"S": "examples/smart-grid-fusion-aws/src/resnet_25KB"
					},
					"EntryPoint": {
						"S": "func.py"
					},
					"CSP": {
						"S": "Azure"
					},
					"MemoryInMB": {
						"N": "512"
					}
				}
			},
			{
				"M": {
					"NodeId": {
						"S": "4"
					},
					"NodeName": {
						"S": "TaskD"
					},
					"Path": {
						"S": "examples/smart-grid-fusion-aws/src/iostress_512wr_25KB"
					},
					"EntryPoint": {
						"S": "func.py"
					},
					"CSP": {
						"S": "Azure"
					},
					"MemoryInMB": {
						"N": "128"
					}
				}
			},
			{
				"M": {
					"NodeId": {
						"S": "5"
					},
					"NodeName": {
						"S": "TaskE"
					},
					"Path": {
						"S": "examples/smart-grid-fusion-aws/src/memstress_128MB_25KB"
					},
					"EntryPoint": {
						"S": "func.py"
					},
					"CSP": {
						"S": "Azure"
					},
					"MemoryInMB": {
						"N": "256"
					}
				}
			},
			{
				"M": {
					"NodeId": {
						"S": "6"
					},
					"NodeName": {
						"S": "TaskF"
					},
					"Path": {
						"S": "examples/smart-grid-fusion-aws/src/xmlparse_23KB_25KB"
					},
					"EntryPoint": {
						"S": "func.py"
					},
					"CSP": {
						"S": "Azure"
					},
					"MemoryInMB": {
						"N": "128"
					}
				}
			},
			{
				"M": {
					"NodeId": {
						"S": "7"
					},
					"NodeName": {
						"S": "TaskG"
					},
					"Path": {
						"S": "examples/smart-grid-fusion-aws/src/iostress_512wr_25KB"
					},
					"EntryPoint": {
						"S": "func.py"
					},
					"CSP": {
						"S": "Azure"
					},
					"MemoryInMB": {
						"N": "128"
					}
				}
			},
			{
				"M": {
					"NodeId": {
						"S": "8"
					},
					"NodeName": {
						"S": "TaskH"
					},
					"Path": {
						"S": "examples/smart-grid-fusion-aws/src/resnet_25KB"
					},
					"EntryPoint": {
						"S": "func.py"
					},
					"CSP": {
						"S": "Azure"
					},
					"MemoryInMB": {
						"N": "512"
					}
				}
			},
			{
				"M": {
					"NodeId": {
						"S": "9"
					},
					"NodeName": {
						"S": "TaskI"
					},
					"Path": {
						"S": "examples/smart-grid-fusion-aws/src/memstress_128MB_25KB"
					},
					"EntryPoint": {
						"S": "func.py"
					},
					"CSP": {
						"S": "Azure"
					},
					"MemoryInMB": {
						"N": "256"
					}
				}
			},
			{
				"M": {
					"NodeId": {
						"S": "10"
					},
					"NodeName": {
						"S": "TaskJ"
					},
					"Path": {
						"S": "examples/smart-grid-fusion-aws/src/iostress_512wr_25KB"
					},
					"EntryPoint": {
						"S": "func.py"
					},
					"CSP": {
						"S": "Azure"
					},
					"MemoryInMB": {
						"N": "128"
					}
				}
			},
			{
				"M": {
					"NodeId": {
						"S": "11"
					},
					"NodeName": {
						"S": "TaskK"
					},
					"Path": {
						"S": "examples/smart-grid-fusion-aws/src/memstress_128MB_25KB"
					},
					"EntryPoint": {
						"S": "func.py"
					},
					"CSP": {
						"S": "Azure"
					},
					"MemoryInMB": {
						"N": "256"
					}
				}
			},
			{
				"M": {
					"NodeId": {
						"S": "12"
					},
					"NodeName": {
						"S": "TaskL"
					},
					"Path": {
						"S": "examples/smart-grid-fusion-aws/src/resnet_25KB"
					},
					"EntryPoint": {
						"S": "func.py"
					},
					"CSP": {
						"S": "Azure"
					},
					"MemoryInMB": {
						"N": "512"
					}
				}
			},
			{
				"M": {
					"NodeId": {
						"S": "13"
					},
					"NodeName": {
						"S": "TaskM"
					},
					"Path": {
						"S": "examples/smart-grid-fusion-aws/src/xmlparse_23KB_25KB"
					},
					"EntryPoint": {
						"S": "func.py"
					},
					"CSP": {
						"S": "Azure"
					},
					"MemoryInMB": {
						"N": "128"
					}
				}
			},
			{
				"M": {
					"NodeId": {
						"S": "14"
					},
					"NodeName": {
						"S": "TaskN"
					},
					"Path": {
						"S": "examples/smart-grid-fusion-aws/src/iostress_512wr_25KB"
					},
					"EntryPoint": {
						"S": "func.py"
					},
					"CSP": {
						"S": "Azure"
					},
					"MemoryInMB": {
						"N": "128"
					}
				}
			},
			{
				"M": {
					"NodeId": {
						"S": "15"
					},
					"NodeName": {
						"S": "TaskO"
					},
					"Path": {
						"S": "examples/smart-grid-fusion-aws/src/memstress_128MB_25KB"
					},
					"EntryPoint": {
						"S": "func.py"
					},
					"CSP": {
						"S": "Azure"
					},
					"MemoryInMB": {
						"N": "256"
					}
				}
			},
			{
				"M": {
					"NodeId": {
						"S": "16"
					},
					"NodeName": {
						"S": "TaskP"
					},
					"Path": {
						"S": "examples/smart-grid-fusion-aws/src/resnet_25KB"
					},
					"EntryPoint": {
						"S": "func.py"
					},
					"CSP": {
						"S": "Azure"
					},
					"MemoryInMB": {
						"N": "512"
					}
				}
			},
			{
				"M": {
					"NodeId": {
						"S": "17"
					},
					"NodeName": {
						"S": "TaskQ"
					},
					"Path": {
						"S": "examples/smart-grid-fusion-aws/src/xmlparse_23KB_25KB"
					},
					"EntryPoint": {
						"S": "func.py"
					},
					"CSP": {
						"S": "Azure"
					},
					"MemoryInMB": {
						"N": "128"
					}
				}
			}
		]
	},
	"wf_id": {
		"S": "fdaff394-215c-40bb-8ca0-1affa6128a02"
	},
	"WorkflowName": {
		"S": "SmartGridFusionAWS"
	},
	"Edges": {
		"L": [
			{
				"M": {
					"TaskA": {
						"L": [
							{
								"S": "TaskB"
							}
						]
					}
				}
			},
			{
				"M": {
					"TaskB": {
						"L": [
							{
								"S": "TaskC"
							}
						]
					}
				}
			},
			{
				"M": {
					"TaskC": {
						"L": [
							{
								"S": "TaskD"
							},
							{
								"S": "TaskE"
							}
						]
					}
				}
			},
			{
				"M": {
					"TaskD": {
						"L": [
							{
								"S": "TaskM"
							}
						]
					}
				}
			},
			{
				"M": {
					"TaskE": {
						"L": [
							{
								"S": "TaskF"
							}
						]
					}
				}
			},
			{
				"M": {
					"TaskF": {
						"L": [
							{
								"S": "TaskG"
							},
							{
								"S": "TaskH"
							},
							{
								"S": "TaskI"
							}
						]
					}
				}
			},
			{
				"M": {
					"TaskG": {
						"L": [
							{
								"S": "TaskK"
							}
						]
					}
				}
			},
			{
				"M": {
					"TaskH": {
						"L": [
							{
								"S": "TaskK"
							}
						]
					}
				}
			},
			{
				"M": {
					"TaskI": {
						"L": [
							{
								"S": "TaskJ"
							}
						]
					}
				}
			},
			{
				"M": {
					"TaskJ": {
						"L": [
							{
								"S": "TaskK"
							}
						]
					}
				}
			},
			{
				"M": {
					"TaskK": {
						"L": [
							{
								"S": "TaskL"
							}
						]
					}
				}
			},
			{
				"M": {
					"TaskL": {
						"L": [
							{
								"S": "TaskP"
							}
						]
					}
				}
			},
			{
				"M": {
					"TaskM": {
						"L": [
							{
								"S": "TaskN"
							}
						]
					}
				}
			},
			{
				"M": {
					"TaskN": {
						"L": [
							{
								"S": "TaskO"
							}
						]
					}
				}
			},
			{
				"M": {
					"TaskO": {
						"L": [
							{
								"S": "TaskL"
							}
						]
					}
				}
			},
			{
				"M": {
					"TaskP": {
						"L": [
							{
								"S": "TaskQ"
							}
						]
					}
				}
			}
		]
	}
}
  
  // var output = {
  //   "wfid": input.wf_id.S,
  //   "wfname": input.WorkflowName.S,
  // //  "WorkflowDescription": input.WorkflowDescription.S,
  //  // "PackageUrl":input.PackageUrl.S, 
  //   "graphs": {
  //     "nodes": input.Nodes.L.map((node, index) => ({ "id": index + 1, "label": node.M.NodeName.S })),
  //     "edges": input.Edges.L.map(edge => (
      
  //       edge.M[Object.keys(edge.M)[0]].L.map(ele=>(
  //         {
  //           "from": Object.keys(edge.M)[0],
  //           "to":ele.S
  //         }
  //       ))

       

  //     )).flat()
  //   }
  // };
  
  // console.log(JSON.stringify(output, null, 2));


  var output = {
    "wfid": input.wf_id.S,
    "wfname": input.WorkflowName.S,
    "graphs": {
      "nodes": input.Nodes.L.map((node, index) => ({ "id": parseInt(node.M.NodeId.S), "label": node.M.NodeName.S })),
      "edges": input.Edges.L.map(edge => {
        var fromNode = Object.keys(edge.M)[0];
        var toNodes = edge.M[fromNode].L.map(ele => ele.S);
        return toNodes.map(toNode => ({
          "from": parseInt(input.Nodes.L.find(node => node.M.NodeName.S === fromNode).M.NodeId.S),
          "to": parseInt(input.Nodes.L.find(node => node.M.NodeName.S === toNode).M.NodeId.S)
        }));
      }).flat()
    }
  };
  
  console.log(JSON.stringify(output, null, 2));
  

  //edge.M.Object.keys(edge.M)[0].L.map((ele)=>ele.S)
  