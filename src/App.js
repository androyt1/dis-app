.resizable-div {
  width: 100%;
  /* Set desired height and other styles for the resizable div */
}

.ellipsis-container {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.ellipsis-content {
  display: inline-block;
  /* Add other desired styles for the content within the ellipsis container */
}

function ResizableDiv() {
  return (
    <div className="resizable-div">
      <div className="ellipsis-container">
        <div className="ellipsis-content">
          This is some long text that needs to fit the available space with an ellipsis at the end if necessary.
        </div>
      </div>
    </div>
  );
}
