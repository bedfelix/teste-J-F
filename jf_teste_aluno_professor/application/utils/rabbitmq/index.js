const ampq = require('amqplib');

module.exports.publishMessage = (msg, queueName) => {
	var connStr = "amqp://guest:guest@rabbit";

	return ampq.connect(connStr)
		.then(conn => {
			return conn.createChannel()
				.then(async channel => {

					await channel.assertQueue(queueName, { durable: true })

					const result = channel.sendToQueue(queueName, Buffer.from(JSON.stringify(msg)), {
						persistent: true
					});

					await channel.close()
					return  result
				})
				.finally(()=> {
					conn.close()
				})
		})
}
