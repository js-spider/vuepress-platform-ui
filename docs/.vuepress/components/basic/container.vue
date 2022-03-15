<script>
export default {
  name: "Container",
  props: {
    inline: String,
  },
  render() {
    const { inline, $slots } = this;
    return (
      <div
        class="custom-container"
        style={{ display: inline ? "inline-block" : "block" }}
      >
        {$slots.default}
      </div>
    );
  },
};
</script>
<style>
.custom-container {
  margin: 15px 0px;
}
</style>
