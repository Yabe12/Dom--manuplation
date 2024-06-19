getDataFromServerA(function (dataA) {
  // Handle data from server A
  processDataFromA(dataA, function (processedDataA) {
    // Handle processed data from server A
    getDataFromServerB(processedDataA, function (dataB) {
      // Handle data from server B
      processDataFromB(dataB, function (processedDataB) {
        // Handle processed data from server B
        getDataFromServerC(processedDataB, function (dataC) {
          // Handle data from server C
          processDataFromC(dataC, function (finalResult) {
            // Display the final result
            console.log('Final result:', finalResult);
          });
        });
      });
    });
  });
});
