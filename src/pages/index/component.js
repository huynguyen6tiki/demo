let count = 0;
Component({
  deriveDataFromProps() {
    console.log('>>>>>>>>>>>>>>> Component 1 >>>> ', count++);
  },
});
