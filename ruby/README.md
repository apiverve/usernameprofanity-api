# Username Profanity API - Ruby Gem

Username Profanity flags offensive or inappropriate usernames before they reach your database. Send any candidate handle to receive a clear true or false profanity check result.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_usernameprofanity'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_usernameprofanity
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_usernameprofanity'

# Initialize the client
client = APIVerve::Usernameprofanity::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ username: "b00bs" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ username: "b00bs" })
  puts response["data"]
rescue APIVerve::Usernameprofanity::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Usernameprofanity::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Usernameprofanity::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "username": "b00bs",
    "isProfane": true
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/usernameprofanity?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/usernameprofanity?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/usernameprofanity?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
