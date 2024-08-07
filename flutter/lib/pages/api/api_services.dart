import 'package:http/http.dart' as http;
import 'dart:convert';

class ApiService {
  static const String baseUrl = 'http://10.0.2.2:8000/api';

  // GET request
  static Future<dynamic> getRequest(String endpoint) async {
    final url = Uri.parse('$baseUrl/$endpoint');
    final response = await http.get(url);
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to load data');
    }
  }

  // POST request
  static Future<void> postRequest(String endpoint, dynamic data) async {
    final url = Uri.parse('$baseUrl/$endpoint');
    final response = await http.post(url, body: json.encode(data), headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to post data');
    }
  }
}
