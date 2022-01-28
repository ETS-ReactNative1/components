const widgetContainerStyle = (theme) => {
  return {
    width: '100%',
    height: 'calc( calc( calc( 100vh - 61px ) / 2 ) - 30px )',
    minHeight: '350px',
    borderRadius: 8,
    border: `1px solid #ccc`,
    margin: '10px',
    background: '#fff',
    fontFamily: 'GloberAdjusted',
    fontSize: 16,
    fontStyle: 'normal',
    letterSpacing: '0.2',
    textAlign: 'left',
    fontWeight: 'bold',
    padding: '16px 12px',
  };
};

const styles = (theme) => ({
  dragingWidget: widgetContainerStyle(theme)
});

export default styles;
