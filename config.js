module.exports = {
  exec : "git log --oneline | head -n 1",
  notify : 'echo "{{stdout}}"',
  wait : 10 // seconds
};
