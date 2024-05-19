using Newtonsoft.Json;

namespace Company.Function
{
    public class CounterObject
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("count")]
        public int Count { get; set; }
    }
}