# Angular Migration Dashboard
This tool is geenrates statistics on your current JS files, and understand how many injectables are left to migrate. 


## How does it work?
Basically, this monitoring service searches for JS files, looks for predefined patterns (fully customizable), and looks for AngularJS component types (directives, controllers, components, factories,...). 
The tool gathers the statistics from the local development git repository, polling it on regular intervals (customizable again), and then pushes the analyzes result to any data store you’d like - in my case it’s an elasticsearch. 


## Result example:
`{
  "_source": {  
    "numberOfJsFiles": 723,
    "timestamp": "2019-03-03T07:41:11.272Z",
    "analyzeResult": {
      "injectable": [
        {
          "$scope": 433
        }
      ],
      "componentType": [
        {
          "controller": 312
        },
        {
          "factory": 115
        },
        {
          "constant": 7
        },
        {
          "directive": 212
        },
        {
          "service": 9
        }]
    }

  }
}



## Security concerns 
This tool was developed for running in local environment without exposing any sensitive data to outsiders. 
Feel free to add any external libraries, and send any analyzes data result to external data stores, but I do not take any responsibilities for any sensitive pattern you will be tracking on. 

## What about monitoring dashboard?
To Be Developed. 
I am planning to write a user interface to view the analyzes result, so development teams can see the current state as a burn down chart, until zero JS files and zero AngularJS dependencies exist in their code base. 
