# Serialization and Deserialization In JS

---

Serialization is the process of converting an in‑memory value (object, struct, image, etc.) into a sequence of bytes, so it can be stored or transmitted.

Deserialization is the inverse, reconstructing the original value from those bytes.

Below is a focused, explanation of serialization/deserialization in JS and Node.js covering concepts, common formats, APIs, performance/security concerns, and practical examples.

---

## Serialization and Deserialization in NodeJS

When code runs inside the same V8 heap, values are passed as live references, there’s no need to convert them into bytes.

Crossing a boundary requires serialization, any time data leaves the V8 heap you need a serialized representation (text or binary):
- Network (HTTP, TCP, WebSocket)
- Disk
- Other Processes (child_process, cluster), worker threads (structured clone or Transferable), native addons, or WASM memory.

---

## Common serialized formats

1. JSON (text)
- Pros: human-readable, ubiquitous, easy debugging, native JSON.parse/stringify.
- Cons: verbose, slower, limited numeric precision (JS Number ≈ IEEE‑754 double), no schema, larger payloads.
- Use: REST APIs, config files, simple RPC

2. Base64 (text encoding for binary)
- Pros: embeds binary in JSON safely; supported everywhere.
- Cons: ~33% size overhead vs raw binary.
- Use: when you must place binary inside text formats or JSON

3. Buffers / Uint8Array (raw binary)
- Pros: compact, fast, zero-copy views, interoperable with native APIs and files.
- Use: files, sockets, crypto, binary protocols, sending instruction.data in Solana/Anchor.

4. MessagePack / CBOR (binary, schema-less)
- Pros: compact, faster than JSON, widely supported.
- Use: faster RPC and compact payloads.

5. Others: Borsh / Bincode / Postcard / FlatBuffers / Protobuf / Cap’n Proto (binary, schema or defined layout)
- Pros: predictable layout, small, fast, cross-language schema support, forward/backward compatibility (Protobuf, Cap’n Proto).
- Cons: require schema or matching struct definitions on both sides.
- Use: blockchain programs (Borsh on Solana), high-performance RPC, cross-language systems.

---

## Buffers 

Buffer is Node’s raw binary container, a fixed-size sequence of bytes (Uint8Array-backed) used to read/write binary data (file I/O, network, crypto, binary protocols).

Unlike JS strings, Buffers hold bytes (0–255) and are not UTF-16. They map directly to binary data on disk/network and can be converted to/from strings with encodings (utf8, base64, hex).

Example:

This route demonstrates a minimal example of binary serialization/deserialization in Node.js using Buffers. When an HTTP POST contains raw bytes (for example, a file uploaded in Postman’s Body → binary), Express receives the request as a stream of Buffer chunks. The handler collects chunks, concatenates them into one Buffer (reconstructing the serialized byte sequence), and then demonstrates two ways to interpret those bytes:

- Raw binary: the Buffer object holds the exact bytes sent over the wire (useful for saving files, forwarding bytes, or passing to binary decoders).
- Text deserialization: buf.toString('utf8') decodes the bytes into a UTF‑8 string (this is deserializing a text payload).
- Metadata: `buf.length` reports the byte size of the payload.


```javascript
const express = require('express');
const fs = require('fs');
const app = express();

// Use Postman => body => binary to send data to this route
app.post('/', (req, res) => {
    // chunk is Buffer
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk)); 

    req.on('end', () => {
        const buf = Buffer.concat(chunks);
        res.send({ 
            buf: buf, 
            content: buf.toString('utf8'),
            size: buf.length 
        });
    });

    req.on('error', err => res.status(500).send(err.message));
});

app.listen(3000);
```