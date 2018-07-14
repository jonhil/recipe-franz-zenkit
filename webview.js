module.exports = (Franz) => {
  const getMessages = function getMessages() {
    //TODO:
    const count = document.querySelectorAll('').length;

    Franz.setBadge(count);
	
  };
  Franz.loop(getMessages);
};
