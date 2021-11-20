// Auto-generated. Do not edit!

// (in-package ilk_paket.srv)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------


//-----------------------------------------------------------

class toplamRequest {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.a = null;
      this.b = null;
    }
    else {
      if (initObj.hasOwnProperty('a')) {
        this.a = initObj.a
      }
      else {
        this.a = 0;
      }
      if (initObj.hasOwnProperty('b')) {
        this.b = initObj.b
      }
      else {
        this.b = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type toplamRequest
    // Serialize message field [a]
    bufferOffset = _serializer.int32(obj.a, buffer, bufferOffset);
    // Serialize message field [b]
    bufferOffset = _serializer.int32(obj.b, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type toplamRequest
    let len;
    let data = new toplamRequest(null);
    // Deserialize message field [a]
    data.a = _deserializer.int32(buffer, bufferOffset);
    // Deserialize message field [b]
    data.b = _deserializer.int32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 8;
  }

  static datatype() {
    // Returns string type for a service object
    return 'ilk_paket/toplamRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ef8322123148e475e3e93a1f609b2f70';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 a
    int32 b
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new toplamRequest(null);
    if (msg.a !== undefined) {
      resolved.a = msg.a;
    }
    else {
      resolved.a = 0
    }

    if (msg.b !== undefined) {
      resolved.b = msg.b;
    }
    else {
      resolved.b = 0
    }

    return resolved;
    }
};

class toplamResponse {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.sonuc = null;
    }
    else {
      if (initObj.hasOwnProperty('sonuc')) {
        this.sonuc = initObj.sonuc
      }
      else {
        this.sonuc = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type toplamResponse
    // Serialize message field [sonuc]
    bufferOffset = _serializer.int32(obj.sonuc, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type toplamResponse
    let len;
    let data = new toplamResponse(null);
    // Deserialize message field [sonuc]
    data.sonuc = _deserializer.int32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 4;
  }

  static datatype() {
    // Returns string type for a service object
    return 'ilk_paket/toplamResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b71c2553696b39a3575811d4670473a7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 sonuc
    
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new toplamResponse(null);
    if (msg.sonuc !== undefined) {
      resolved.sonuc = msg.sonuc;
    }
    else {
      resolved.sonuc = 0
    }

    return resolved;
    }
};

module.exports = {
  Request: toplamRequest,
  Response: toplamResponse,
  md5sum() { return '476dd41daa3fef28cab18c16e79dcab8'; },
  datatype() { return 'ilk_paket/toplam'; }
};
