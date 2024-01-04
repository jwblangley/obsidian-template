const fs = require("fs")
const path = require("node:path");

function last_daily_note_content(tp) {
  const parent_dir = path.dirname(tp.file.path())
  const latest_note = fs.readdirSync(parent_dir).filter(f => !f.startsWith(tp.file.title)).sort().slice(-1)[0]
  return fs.readFileSync(`${parent_dir}/${latest_note}`)
}

module.exports = last_daily_note_content
