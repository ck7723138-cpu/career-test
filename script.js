body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: #f4f6f8;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  background: white;
  padding: 30px;
  width: 90%;
  max-width: 360px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

button {
  display: block;
  width: 100%;
  padding: 12px;
  margin-top: 15px;

  font-size: 16px;
  border: none;
  border-radius: 6px;
  background: #4CAF50;
  color: white;

  cursor: pointer;
  pointer-events: auto;
}

button:active {
  transform: scale(0.97);
}

#result {
  margin-top: 20px;
  font-weight: bold;
}
