import { APIGatewayEvent, Callback, Context } from 'aws-lambda';

export async function scheduler(
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    console.log(`event=WEATHER_WARNING_START`);
    callback();
  } catch (error) {
    console.log(`event=WEATHER_WARNING_ERROR error=${error.stack}`);
    throw error;
  }
}
