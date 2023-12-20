const showFormattedDate = (date) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return new Date(date).toLocaleDateString('id-ID', options);
};

const extractContent = (html) => new DOMParser()
  .parseFromString(html, 'text/html')
  .documentElement.textContent

export { showFormattedDate, extractContent };
