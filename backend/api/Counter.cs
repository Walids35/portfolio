using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Azure.Functions.Worker;
using System.Net.Http;
using System.Text;

namespace Company.Function
{
    public static class Counter
    {
        [FunctionName("Counter")]
        public static HttpResponseMessage Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            [CosmosDB(databaseName: "AzureResume", containerName: "Counter", Connection = "CosmosDBConnectionString", Id ="1" , PartitionKey = "1")] CounterObject counter,
            [CosmosDB(databaseName: "AzureResume", containerName: "Counter", Connection = "CosmosDBConnectionString", Id ="1" , PartitionKey = "1")] out CounterObject updateCounter,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            updateCounter = counter;
            updateCounter.Count += 1;

            var JsonToReturn = JsonConvert.SerializeObject(updateCounter);

            return new HttpResponseMessage(System.Net.HttpStatusCode.OK){
                Content = new StringContent(JsonToReturn, Encoding.UTF8, "application/json")
            };
        }
    }
}
