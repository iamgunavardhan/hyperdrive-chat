export const sendMessageApi = (message: string): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Echo: ${message}`);
    }, 1000);
  });
};
