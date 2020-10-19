import React from "react";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hasErrored: false,
		};
	}
	// will get error returned from child
	static getDerivedStateFromError(error) {
		return { hasErrored: true };
	}

	componentDidCatch(error, info) {}

	render() {
		// if error render error component page
		if (this.state.hasErrored) {
			return <div>Something went wrong</div>;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
