  
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
  