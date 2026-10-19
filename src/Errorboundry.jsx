import React from "react";
export default  class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }


  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }


  
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2AYyvI8BlYtFo0nrjZwIQGXKFC9WZ_6oZxFEAfRogA&s=10"  />;
    }

    return this.props.children; 
  }
}

