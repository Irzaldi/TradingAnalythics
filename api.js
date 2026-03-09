export async function fetchPrice(symbol){

const url=`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}USDT`;

const res=await fetch(url);

return await res.json();
}
