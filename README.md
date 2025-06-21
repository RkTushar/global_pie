# StartEval - Modern Startup Discovery Platform

A modern, responsive web application for discovering and evaluating promising startups. Built with HTML5, CSS3, and vanilla JavaScript with a focus on user experience and modern design principles.

## 🚀 Features

### Modern UI/UX
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern Navigation**: Fixed navigation bar with search, notifications, and user profile
- **Hero Section**: Engaging landing section with statistics and call-to-action buttons
- **Interactive Cards**: Hover effects, animations, and smooth transitions
- **Toast Notifications**: Real-time feedback for user actions

### Startup Discovery
- **Featured Startups**: Curated selection of promising opportunities
- **Trending Startups**: Real-time trending startups with fire badges
- **Advanced Filtering**: Filter by industry, revenue range, and location
- **Search Functionality**: Real-time search across startup names, descriptions, and categories
- **Detailed Metrics**: Revenue, growth, and asking price information

### Interactive Features
- **Favorite System**: Add/remove startups to favorites with visual feedback
- **Contact Integration**: Direct contact buttons for each startup
- **Smooth Animations**: Intersection Observer for scroll-based animations
- **Keyboard Navigation**: Ctrl/Cmd+K for search focus, Escape for clearing
- **Loading States**: Visual feedback for button interactions

## 🎨 Design System

### Color Palette
- **Primary**: `#6366F1` (Indigo)
- **Secondary**: `#8B5CF6` (Purple)
- **Success**: `#10B981` (Emerald)
- **Warning**: `#F59E0B` (Amber)
- **Danger**: `#EF4444` (Red)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately across devices

### Components
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Gradient backgrounds, hover animations
- **Forms**: Modern styling with focus states
- **Badges**: Color-coded for different startup types

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🛠️ Technical Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with CSS Grid, Flexbox, and CSS Variables
- **JavaScript**: Vanilla JS with ES6+ features
- **Bootstrap 5**: For responsive grid and components
- **Font Awesome**: For icons and visual elements
- **Google Fonts**: Inter font family

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd starteval_demo
   ```

2. **Open the application**
   - Simply open `public/index.html` in your web browser
   - Or serve it using a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve public
   ```

3. **Explore the features**
   - Try the search functionality (Ctrl/Cmd+K)
   - Click on favorite buttons
   - Use the filters
   - Hover over startup cards
   - Test responsive design

## 🎯 Key Features in Detail

### Search & Filter
- **Real-time Search**: Instant filtering as you type
- **Multi-criteria Filtering**: Industry, revenue, location
- **Visual Feedback**: Loading states and toast notifications

### Startup Cards
- **Featured Badges**: Special highlighting for featured startups
- **Trending Indicators**: Fire badges for trending startups
- **Interactive Elements**: Hover effects and click animations
- **Metric Display**: Clean presentation of financial data

### Navigation
- **Fixed Header**: Always accessible navigation
- **Search Integration**: Prominent search bar
- **Notification System**: Bell icon with badge
- **User Profile**: Avatar and user information

### Animations
- **Scroll-triggered**: Elements animate as they come into view
- **Hover Effects**: Smooth transitions on interactive elements
- **Loading States**: Visual feedback for user actions
- **Parallax Effects**: Subtle background movement

## 🎨 Customization

### Colors
Update the CSS variables in `public/css/style.css`:
```css
:root {
    --primary-color: #6366F1;
    --secondary-color: #8B5CF6;
    /* ... other colors */
}
```

### Typography
Change the font family in the CSS:
```css
body {
    font-family: 'Your-Font', system-ui, sans-serif;
}
```

### Layout
Modify the grid system in the HTML:
```html
<div class="row g-4">
    <div class="col-lg-4 col-md-6">
        <!-- Startup card -->
    </div>
</div>
```

## 🔧 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the repository.

---

**StartEval** - Discover your next investment opportunity! 🚀
