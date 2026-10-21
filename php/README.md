# Username Profanity API - PHP Package

Username Profanity flags offensive or inappropriate usernames before they reach your database. Send any candidate handle to receive a clear true or false profanity check result.

## Installation

Install via Composer:

```bash
composer require apiverve/usernameprofanity
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Usernameprofanity\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['username' => 'b00bs']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Usernameprofanity\Client;
use APIVerve\Usernameprofanity\Exceptions\APIException;
use APIVerve\Usernameprofanity\Exceptions\ValidationException;

try {
    $response = $client->execute(['username' => 'b00bs']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/usernameprofanity?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/usernameprofanity?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/usernameprofanity?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
