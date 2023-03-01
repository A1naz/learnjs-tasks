let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let readedMessages = new WeakMap();

//Если сообщение прочитано, то добавляем в readedMessages

readedMessages.set(messages[1]);
readedMessages.set(messages[2]);

//Для проверки, прочитано ли сообщение можно использовать:

console.log(readedMessages.has(messages[1]) ? true : false);

//После удаления сообщения он удалится из readedMessages

messages.shift();

console.log(messages);
