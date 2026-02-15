using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.UsernameProfanity
{
    /// <summary>
    /// Query options for the Username Profanity API
    /// </summary>
    public class UsernameProfanityQueryOptions
    {
        /// <summary>
        /// The username to check if it is inappropriate or profane
        /// </summary>
        [JsonProperty("username")]
        public string Username { get; set; }
    }
}
