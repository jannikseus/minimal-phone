// Variables used by Scriptable.
// These must be at the very top of the file.
// icon-color: blue;
// icon-glyph: mobile-alt;

const widget = new ListWidget();
widget.setPadding(16, 16, 16, 16);
widget.backgroundColor = new Color("#1c1c1e");

const title = widget.addText("Apps");
title.font = Font.boldSystemFont(16);
title.textColor = Color.white();

widget.addSpacer(12);

const apps = [
  { name: "📞 Phone",     url: "tel:" },
  { name: "💬 WhatsApp",  url: "whatsapp://" },
  { name: "👥 Teams",     url: "msteams://" },
  { name: "✈️ Telegram",  url: "tg://" },
  { name: "🛡️ Signal",    url: "sgnl://" },
  { name: "✉️ Mail",      url: "message://" }
];

for (const app of apps) {
  const row = widget.addStack();
  row.layoutHorizontally();
  row.centerAlignContent();

  // Make the entire row tappable
  row.url = app.url;

  row.setPadding(8, 10, 8, 10);
  row.backgroundColor = new Color("#2c2c2e");
  row.cornerRadius = 8;

  const label = row.addText(app.name);
  label.font = Font.systemFont(15);
  label.textColor = Color.white();

  widget.addSpacer(8);
}

Script.setWidget(widget);

if (!config.runInWidget) {
  await widget.presentMedium();
}

Script.complete();
