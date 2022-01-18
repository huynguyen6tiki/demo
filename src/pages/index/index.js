let count = 0;
Page({
  data: {
    items: [{ text: "0" }],
  },
  onAdd() {
    const items = [...this.data.items];
    items.push({ text: `${count++}` });
    this.setData({ items });
  },
});
