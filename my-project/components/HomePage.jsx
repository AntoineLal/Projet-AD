// Import the CSS file
import './HomePage.css';

export default function HomePage() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to Our Health and Wellness Tracker</h1>
            <div className="home-description">
                <p>
                    This website is designed to help you monitor and improve your physical health by allowing you to
                    register essential personal information, such as your age, gender, height, and weight.
                </p>
                <p>
                    After registering, you’ll receive personalized insights, including daily calorie recommendations per meal and other health metrics tailored to your profile.
                </p>
                <p>
                    Use the navigation to access different features, track your progress, and explore various resources designed to support your health goals.
                    Start your journey to a healthier life today!
                </p>
            </div>
            <button>Get Started</button>
        </div>
    );
}
