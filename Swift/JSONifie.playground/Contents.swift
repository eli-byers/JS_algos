//: Playground - noun: a place where people can play

import UIKit

//
//Please use this Google doc to code during your interview. To free your hands for coding, we recommend that you use a headset or a phone with speaker option.
//
//    Given a map or list whose values could be maps, lists, strings, or primitives, produce computer-readable JSONified plaintext output. Spacing doesn’t matter, output only needs to be valid JSON.
//
//    For example, given:

let myDict:[String: Any] = ["key": ["value1", "value2", ["key":10]]]

//
//Output should be similar to (plain text, spacing doesn’t matter):
//{
//    "key": [
//    "value1",
//    "value2",
//    ],
//}
//
// func takes dict or array return json string
// return string value
//
//
//{
//    "key": [
//    "value1",
//    "value2",
//    ],
//}

//extension NSDictionary {
//
//    func JSONifie(data: NSDictionary, output: String = "") -> String {
//        func JSONifie(data: NSArray, output: String = "") -> String {
//            func JSONifie(data: String, output: String = "") -> String {
//                func JSONifie(data: Any, output: String = "") -> String {
//
//
//
//                }

//                dict.JSONifie() // return string




                
func JSONifie(data: Any) -> String {
    var output = ""
    
    // data is a dict
    if let dict = data as? NSDictionary {
        output += "{"
    
        // assuming this works
        for (key, value) in dict {
            output += "\"\(key)\":"
            output += JSONifie(data: value)
            output += ","
        }
        output += "}"
    }
        
    // data is an array
    else if let array = data as? NSArray {
        output += "["
        
        for val in array {
            output += JSONifie(data: val)
        }
        output += "]"
        
    }
        
    // data is a String
    else if let str = data as? String {
        output += "\"\(str)\","
    }
        
    // catch all
    else {
        output += "\(data),"
    }


    return output
}



print(JSONifie(data: myDict))

