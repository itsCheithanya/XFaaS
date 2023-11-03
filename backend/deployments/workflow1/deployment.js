const deploy=[{
    "wf_id": "48a41d8e-fbb3-41c4-ad7c-5a0ac9ee83ad",  
    "wf_refactored_id": "82097845-56fb-48ec-8bcd-3f1ab70c46c1",
    "wf_deployment_name": "multicloud-deployment",
    "wf_deployment_id": "82097845-56fb-48ec-8bcd-3f1ab70c46c1", 
    "wf_deployment_time": "2023-01-22 08:40:58.629201",
    "wf_dc_config": {
        "criw": {"region": "ap-south-1", "csp": "AWS"}, 
        "fvrf": {"region": "Central India", "csp": "Azure"}
    },
    "func_deployment_config": {
        "fm9m": {
            "resource_id": "function-uuid-within-data-centre (ARN)",
            "dc_config_id": "criw",
            "endpoint": "url for function invocation created on deployment time",
           
        },
        "b74b": "criw",
        "tycp": "fvrf",
        "bq21": "fvrf",
        "tyvq": "fvrf"
    }//partition config mapping of [f_id] -> [dc_config_id]
},{
    "wf_id": "48a41d8e-fbb3-41c4-ad7c-5a0ac9ee83ad",  
    "wf_refactored_id": "82097845-56fb-48ec-8bcd-3f1ab70c46c2",
    "wf_deployment_name": "singlecloud-aws",
    "wf_deployment_id": "82097845-56fb-48ec-8bcd-3f1ab70c46c2", 
    "wf_deployment_time": "2023-01-22 08:40:58.629201",
    "wf_dc_config": {
        "criw": {"region": "ap-south-1", "csp": "AWS"}, 
        "fvrf": {"region": "Central India", "csp": "Azure"}
    },
    "func_deployment_config": {
        "fm9m": {
            "resource_id": "function-uuid-within-data-centre (ARN)",
            "dc_config_id": "criw",
            "endpoint": "url for function invocation created on deployment time",
           
        },
        "b74b": "criw",
        "tycp": "fvrf",
        "bq21": "fvrf",
        "tyvq": "fvrf"
    }//partition config mapping of [f_id] -> [dc_config_id]
},{
    "wf_id": "48a41d8e-fbb3-41c4-ad7c-5a0ac9ee83ad",  
    "wf_refactored_id": "82097845-56fb-48ec-8bcd-3f1ab70c46c3",
    "wf_deployment_name": "singlecloud-azure",
    "wf_deployment_id": "82097845-56fb-48ec-8bcd-3f1ab70c46c3", 
    "wf_deployment_time": "2023-01-22 08:40:58.629201",
    "wf_dc_config": {
        "criw": {"region": "ap-south-1", "csp": "AWS"}, 
        "fvrf": {"region": "Central India", "csp": "Azure"}
    },
    "func_deployment_config": {
        "fm9m": {
            "resource_id": "function-uuid-within-data-centre (ARN)",
            "dc_config_id": "criw",
            "endpoint": "url for function invocation created on deployment time",
           
        },
        "b74b": "criw",
        "tycp": "fvrf",
        "bq21": "fvrf",
        "tyvq": "fvrf"
    }//partition config mapping of [f_id] -> [dc_config_id]
},{
    "wf_id": "48a41d8e-fbb3-41c4-ad7c-5a0ac9ee83ad",  
    "wf_refactored_id": "82097845-56fb-48ec-8bcd-3f1ab70c46c4",
    "wf_deployment_name": "multicloud-fusion",
    "wf_deployment_id": "82097845-56fb-48ec-8bcd-3f1ab70c46c4", 
    "wf_deployment_time": "2023-01-22 08:40:58.629201",
    "wf_dc_config": {
        "criw": {"region": "ap-south-1", "csp": "AWS"}, 
        "fvrf": {"region": "Central India", "csp": "Azure"}
    },
    "func_deployment_config": {
        "fm9m": {
            "resource_id": "function-uuid-within-data-centre (ARN)",
            "dc_config_id": "criw",
            "endpoint": "url for function invocation created on deployment time",
           
        },
        "b74b": "criw",
        "tycp": "fvrf",
        "bq21": "fvrf",
        "tyvq": "fvrf"
    }//partition config mapping of [f_id] -> [dc_config_id]
}
]
const refractored=[{
    "WorkflowOwner": "String",
    "Workflow Id": "uuid",
    "Refactored Workflow Id": "82097845-56fb-48ec-8bcd-3f1ab70c46c3",
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
    // "graphs": {
    //     "nodes": [
    //       { "id": fm9m, "label": "Mobilenet" },
    //       { "id": b74b, "label": "Resnet" },
    //       { "id": tycp, "label": "Squeezenet" },
    //       { "id": bq21, "label": "Union" },
    //       { "id": tyvq, "label": "CollectLogs" }
    //     ],
    //     "edges": [
    //       { "from": fm9m, "to": b74b },
    //       { "from": fm9m, "to": tycp },
    //       { "from": b74b, "to": bq21 },
    //       { "from": b74b, "to": tyvq }
    //     ]
    //   },
  
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
  },{
    "WorkflowOwner": "String",
    "Workflow Id": "uuid",
    "Refactored Workflow Id": "82097845-56fb-48ec-8bcd-3f1ab70c46c2",
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
    // "graphs": {
    //     "nodes": [
    //       { "id": fm9m, "label": "Mobilenet" },
    //       { "id": b74b, "label": "Resnet" },
    //       { "id": tycp, "label": "Squeezenet" },
    //       { "id": bq21, "label": "Union" },
    //       { "id": tyvq, "label": "CollectLogs" }
    //     ],
    //     "edges": [
    //       { "from": fm9m, "to": b74b },
    //       { "from": fm9m, "to": tycp },
    //       { "from": b74b, "to": bq21 },
    //       { "from": b74b, "to": tyvq }
    //     ]
    //   },
  
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
  },{
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
  },{
    "WorkflowOwner": "String",
    "Workflow Id": "uuid",
    "Refactored Workflow Id": "82097845-56fb-48ec-8bcd-3f1ab70c46c4",
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
    // "graphs": {
    //     "nodes": [
    //       { "id": fm9m, "label": "Mobilenet" },
    //       { "id": b74b, "label": "Resnet" },
    //       { "id": tycp, "label": "Squeezenet" },
    //       { "id": bq21, "label": "Union" },
    //       { "id": tyvq, "label": "CollectLogs" }
    //     ],
    //     "edges": [
    //       { "from": fm9m, "to": b74b },
    //       { "from": fm9m, "to": tycp },
    //       { "from": b74b, "to": bq21 },
    //       { "from": b74b, "to": tyvq }
    //     ]
    //   },
  
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
  }]
module.exports.deployments=deploy;
module.exports.refractored=refractored;