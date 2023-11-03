  
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


  // var output = {
  //   "wfid": input.wf_id.S,
  //   "wfname": input.WorkflowName.S,
  //   "graphs": {
  //     "nodes": input.Nodes.L.map((node, index) => ({ "id": parseInt(node.M.NodeId.S), "label": node.M.NodeName.S })),
  //     "edges": input.Edges.L.map(edge => {
  //       var fromNode = Object.keys(edge.M)[0];
  //       var toNodes = edge.M[fromNode].L.map(ele => ele.S);
  //       return toNodes.map(toNode => ({
  //         "from": parseInt(input.Nodes.L.find(node => node.M.NodeName.S === fromNode).M.NodeId.S),
  //         "to": parseInt(input.Nodes.L.find(node => node.M.NodeName.S === toNode).M.NodeId.S)
  //       }));
  //     }).flat()
  //   }
  // };
  
  // console.log(JSON.stringify(output, null, 2));
  

//deployments
var input = [
  {
    "wf_refacored_id": {
      "S": "b0bbc89d-5a86-4bd8-95aa-4d2554c64caf"
    },
    "wf_dc_config": {
      "M": {
        "aws": {
          "M": {
            "region": {
              "S": "ap-south-1"
            },
            "csp": {
              "S": "AWS"
            }
          }
        },
        "azure": {
          "M": {
            "region": {
              "S": "Central India"
            },
            "csp": {
              "S": "Azure"
            }
          }
        }
      }
    },
    "wf_deployment_id": {
      "S": "3e6cecd9-ad1f-4fcf-942a-33cb05702aec"
    },
    "wf_deployment_time": {
      "S": "2023-02-11 05:15:41.254707"
    },
    "func_deployment_config": {
      "M": {
        "1": {
          "M": {
            "dc_config_id": {
              "S": "aws"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "2": {
          "M": {
            "dc_config_id": {
              "S": "aws"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "3": {
          "M": {
            "dc_config_id": {
              "S": "aws"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "4": {
          "M": {
            "dc_config_id": {
              "S": "aws"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "5": {
          "M": {
            "dc_config_id": {
              "S": "aws"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "6": {
          "M": {
            "dc_config_id": {
              "S": "aws"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "7": {
          "M": {
            "dc_config_id": {
              "S": "aws"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "8": {
          "M": {
            "dc_config_id": {
              "S": "aws"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "9": {
          "M": {
            "dc_config_id": {
              "S": "aws"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "10": {
          "M": {
            "dc_config_id": {
              "S": "aws"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "11": {
          "M": {
            "dc_config_id": {
              "S": "aws"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "12": {
          "M": {
            "dc_config_id": {
              "S": "aws"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "13": {
          "M": {
            "dc_config_id": {
              "S": "aws"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "14": {
          "M": {
            "dc_config_id": {
              "S": "aws"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "15": {
          "M": {
            "dc_config_id": {
              "S": "aws"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "16": {
          "M": {
            "dc_config_id": {
              "S": "aws"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "17": {
          "M": {
            "dc_config_id": {
              "S": "aws"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        }
      }
    },
    "wf_deployment_name": {
      "S": "JPDC SMART GRID SINGLE CLOUD"
    },
    "wf_id": {
      "S": "95a928e0-5d12-41ff-9ee9-f89cbd442d4e"
    }
  },
  {
    "wf_dc_config": {
      "M": {
        "aws": {
          "M": {
            "region": {
              "S": "ap-south-1"
            },
            "csp": {
              "S": "AWS"
            }
          }
        },
        "azure": {
          "M": {
            "region": {
              "S": "Central India"
            },
            "csp": {
              "S": "Azure"
            }
          }
        }
      }
    },
    "wf_deployment_id": {
      "S": "88a3acc5-2f6e-4600-8a3a-5299c6c83bc2"
    },
    "wf_deployment_time": {
      "S": "2023-02-07 23:11:38.363067"
    },
    "func_deployment_config": {
      "M": {
        "1": {
          "M": {
            "dc_config_id": {
              "S": "azure"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "2": {
          "M": {
            "dc_config_id": {
              "S": "azure"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "3": {
          "M": {
            "dc_config_id": {
              "S": "azure"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "4": {
          "M": {
            "dc_config_id": {
              "S": "azure"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "5": {
          "M": {
            "dc_config_id": {
              "S": "azure"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        },
        "6": {
          "M": {
            "dc_config_id": {
              "S": "azure"
            },
            "resource_id": {
              "S": ""
            },
            "endpoint": {
              "S": ""
            }
          }
        }
      }
    },
    "refactored_wf_id": {
      "S": "5952883c-10cd-4cb4-a5e2-389ce6a04557"
    },
    "wf_deployment_name": {
      "S": "JPDC SMART GRID SINGLE CLOUD"
    },
    "wf_id": {
      "S": "0e0817b2-a639-4fec-9399-98ff24ad6464"
    }
  }
];

var output2 = input.map(obj => {
  var wf_id = obj.wf_id.S ? obj.wf_id.S: "";
  var wf_refactored_id = obj.wf_refacored_id ? obj.wf_refacored_id.S : "";
  var wf_deployment_name = obj.wf_deployment_name.S ?  obj.wf_deployment_name.S : "";
  var wf_deployment_id = obj.wf_deployment_id.S ? obj.wf_deployment_id.S : "" ;
  var wf_deployment_time = obj.wf_deployment_time.S ? obj.wf_deployment_time.S:"";
  
  var wf_dc_config = {};
  Object.entries(obj.wf_dc_config.M).forEach(([key, value]) => {
    wf_dc_config[key] = {
      region: value.M.region.S,
      csp: value.M.csp.S
    };
  });
  
  var func_deployment_config = {};
  Object.entries(obj.func_deployment_config.M).forEach(([key, value]) => {
    if (value.M) {
      func_deployment_config[key] = {
        dc_config_id: value.M.dc_config_id.S,
        resource_id: value.M.resource_id.S,
        endpoint: value.M.endpoint.S
      };
    } else if (value.S) {
      func_deployment_config[key] = value.S;
    }
  });
  
  return {
    wf_id: wf_id,
    wf_refactored_id: wf_refactored_id,
    wf_deployment_name: wf_deployment_name,
    wf_deployment_id: wf_deployment_id,
    wf_deployment_time: wf_deployment_time,
    wf_dc_config: wf_dc_config,
    func_deployment_config: func_deployment_config
  };
});

console.log(JSON.stringify(output2, null, 2));
  

//
var inp={
  "WorkflowOwner": "String",
  "Workflow Id": "uuid",
  "Refactored Workflow Id": "82097845-56fb-48ec-8bcd-3f1ab70c46c1",
  "WorkflowName": "ImgProcessingFanoutMulticloudAWSToAzure",
  "WorkflowDescription": "String",
  "WorkflowVersion": "String",
  "refactoring_strategy": "",
  "PackageUrl": "String", 
  "wf_fusion_config": [
    {
        "fused_func_id": "3ycp",
        "original_func_ids": ["zxd0", "rysh", "37u3"]
    }
  ],
  "wf_partitions": [
    {
        "partition_label": "label for datacentre",
        "func_ids": ["zxd0", "rysh", "37u3"] 
    }
  ],
  "Nodes": [
    {
      "NodeId": "fm9m",
      "ModuleName": "String", 
      "NodeName": "Resize",
      "Path": "examples/image-processing-diamond-multicloud-aws-to-az/src/Resize",
      "EntryPoint": "func.py",
      "MemoryInMB": 512,
      "IsFused": "boolean" ,
      "IsAutoGenerated": "boolean" 
    },
    {
      "NodeId": "b74b",
      "NodeName": "Mobilenet",
      "Path": "examples/image-processing-diamond-multicloud-aws-to-az/src/Mobilenet",
      "EntryPoint": "func.py",
      "MemoryInMB": 512
    },
    {
      "NodeId": "3ycp",
      "NodeName": "Resnet",
      "Path": "examples/image-processing-diamond-multicloud-aws-to-az/src/Resnet",
      "EntryPoint": "func.py",
      "MemoryInMB": 512
    },
    {
      "NodeId": "bq21",
      "NodeName": "Squeezenet",
      "Path": "examples/image-processing-diamond-multicloud-aws-to-az/src/Squeezenet",
      "EntryPoint": "func.py",
      "MemoryInMB": 512
    },
    {
      "NodeId": "tyvq",
      "NodeName": "Union",
      "Path": "examples/image-processing-diamond-multicloud-aws-to-az/src/Union",
      "EntryPoint": "func.py",
      "MemoryInMB": 512
    },
    {
      "NodeId": "256", 
      "NodeName": "CollectLogs",
      "Path": "examples/image-processing-diamond-multicloud-aws-to-az/src/CollectLogs",
      "EntryPoint": "func.py",
      "MemoryInMB": 512
    }
  ],
  "graphs": {
      "nodes": [
        { "id": 9, "label": "Mobilenet","color":"#0080FF" },
        { "id": 7, "label": "Resnet","color":"#FF9900" },
        { "id": 3, "label": "Squeezenet","color":"#0080FF"  },
        { "id": 2, "label": "Union" ,"color":"#FF9900"},
        { "id": 4, "label": "CollectLogs","color":"#FF9900" }
      ],
      "edges": [
        { "from": 9, "to": 7 },
        { "from": 9, "to": 3 },
        { "from": 7, "to": 2 },
        { "from": 7, "to": 4 }
      ]
    },

  "Edges": [
        {
            "src_node_id": "fm9m",
            "sink_node_id": "b74b",
            "is_auto_generated": "boolean" 
        }, 
        {   
            "b74b": ["3ycp"]
        }, 
        {
            "3ycp": ["bq21"]
        },
        {
            "bq21": ["tyvq"]
        }
    ]
}
var inp1={
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
  },
  "wf_refactored_id": {
    "S": "6e975fc5-b2cb-4759-a5a0-ee49851d33ef"
  },
  "refactoring_strategy": {
    "S": "Function fusion"
  },
  "wf_partitions": {
    "L": [
      {
        "M": {
          "partition_label": {
            "S": "AWS"
          },
          "function_ids": {
            "L": [
              {
                "S": "4"
              },
              {
                "S": "7"
              },
              {
                "S": "8"
              },
              {
                "S": "9"
              },
              {
                "S": "10"
              },
              {
                "S": "11"
              },
              {
                "S": "13"
              },
              {
                "S": "14"
              },
              {
                "S": "15"
              },
              {
                "S": "5"
              },
              {
                "S": "12"
              },
              {
                "S": "1"
              },
              {
                "S": "256"
              }
            ]
          }
        }
      }
    ]
  }
}