import Net from 'net';

class Network {
  constructor(domain = '127.0.0.1', port = 1111) {
    const onSuccess = (socket) => {
      console.log("SUCCESS");
    }
    this.client = Net.createConnection(port, domain, onSuccess);
    this.client.on('error', (err) => {
      console.log(err);
    });
    this.client.on('data', onData.bind(this));
  }
  
  static getNetwork(domain, port){
    if (!instance){
      this.instance = new Network();
    }
    return this.instance;
  }
  
  onData(chunk){
    console.log(chunk);
  }
  
  publish(message){
    for (subscriber of this.subscribers) {
      subscriber.call(null, message);
    }
  }
  
  subscribe(callbackFunc = () => throw new Error('There are no callback subscribe!')){
    this.subscribers = [callbackFunc].concat(this.subscribers);
  }
}
