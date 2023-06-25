const deploy=[{
    "wf_id": "48a41d8e-fbb3-41c4-ad7c-5a0ac9ee83ad",  
    "wf_refactored_id": "82097845-56fb-48ec-8bcd-3f1ab70c46c3",
    "wf_deployment_name": "multicloud-deployment",
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
        "3ycp": "fvrf",
        "bq21": "fvrf",
        "tyvq": "fvrf"
    }//partition config mapping of [f_id] -> [dc_config_id]
},{
    "wf_id": "48a41d8e-fbb3-41c4-ad7c-5a0ac9ee83ad",  
    "wf_refactored_id": "82097845-56fb-48ec-8bcd-3f1ab70c46c3",
    "wf_deployment_name": "singlecloud-aws",
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
        "3ycp": "fvrf",
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
        "3ycp": "fvrf",
        "bq21": "fvrf",
        "tyvq": "fvrf"
    }//partition config mapping of [f_id] -> [dc_config_id]
},{
    "wf_id": "48a41d8e-fbb3-41c4-ad7c-5a0ac9ee83ad",  
    "wf_refactored_id": "82097845-56fb-48ec-8bcd-3f1ab70c46c3",
    "wf_deployment_name": "multicloud-fusion",
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
        "3ycp": "fvrf",
        "bq21": "fvrf",
        "tyvq": "fvrf"
    }//partition config mapping of [f_id] -> [dc_config_id]
}
]
module.exports.deployments=deploy;