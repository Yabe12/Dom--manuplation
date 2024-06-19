// Using promises
getDataFromServerA()
  .then(processDataFromA)
  .then(getDataFromServerB)
  .then(processDataFromB)
  .then(getDataFromServerC)
  .then(processDataFromC)
  .then((finalResult) => {
    console.log('Final result:', finalResult);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });

// Using async-await functions
async function fetchDataAndProcess() {
  try {
    const dataA = await getDataFromServerA();
    const processedDataA = await processDataFromA(dataA);
    const dataB = await getDataFromServerB(processedDataA);
    const processedDataB = await processDataFromB(dataB);
    const dataC = await getDataFromServerC(processedDataB);
    const finalResult = await processDataFromC(dataC);
    console.log('Final result:', finalResult);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

fetchDataAndProcess();
