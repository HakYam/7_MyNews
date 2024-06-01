production
https://hakyam.github.io/7_MyNews/

# MyNews

Welcome to MyNews, a dynamic and responsive news website that provides the latest news across various categories such as technology, economy, sports, and more. This project leverages modern web technologies to deliver a seamless and engaging user experience.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Installation

### Prerequisites
- Node.js (>=14.x)
- npm (>=6.x)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/HakYam/7_MyNews.git
   cd 7_MyNews
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add any necessary environment variables.

4. Run the application:
   ```sh
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

Once the application is running, you can:
- Browse news articles by category.
- Read detailed articles.
- Use the search functionality to find specific news.
- Register and log in to personalize your experience.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **News Categories**: Browse news by categories such as technology, economy, sports, etc.
- **Detailed Articles**: View detailed information about each news article.
- **Search Functionality**: Search for news articles.
- **User Authentication**: Register and log in to personalize your experience.

## Project Structure

```
7_MyNews/
├── css/
│   ├── article.css
│   ├── login.css
│   ├── search.css
│   └── style.css
├── images/
│   ├── ...
├── js/
│   ├── index.js
│   └── swiper.js
├── sass/
│   ├── _variables.scss
│   ├── article.scss
│   ├── login.scss
│   ├── mixins.scss
│   ├── search.scss
│   └── style.scss
├── index.html
├── article.html
├── login.html
├── news-category.html
├── search.html
├── signup.html
└── ...
```

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- Special thanks to the [Bootstrap](https://getbootstrap.com/) team for their responsive design framework.
- Thanks to the [Font Awesome](https://fontawesome.com/) team for the icon library.
- Thanks to [Swiper](https://swiperjs.com/) for the carousel component.
