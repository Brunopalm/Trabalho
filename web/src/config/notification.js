export function notificConfig(config, type) {
  return {
    type,
    position: "top-right", // This will override the global props position.
    progressBar: true,
    timeOut: 1000,
    attention: true, // This will add a shadow like the confirm method.
    onAttentionClick: (id) => {}, //override default behavior of 'attention' background click.
    message: config,
    options: {},
  };
}
