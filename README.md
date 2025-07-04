# AI Agent Operations Interface

A modern, responsive web interface for managing AI agent operations with a beautiful UI built on Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with dark/light theme support
- **Chat Interface**: Real-time chat with AI agents
- **Knowledge Base Management**: Upload and manage documents for AI training
- **Team Collaboration**: Manage team members and permissions
- **Model Selection**: Choose from different AI models
- **Settings Panel**: Comprehensive configuration options
- **Mobile Responsive**: Works seamlessly on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Custom component library with shadcn/ui
- **Theme**: OKLCH color palette with light/dark mode
- **Icons**: Lucide React icons
- **State Management**: React hooks and context

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/huygeek/aia-gent-operations-interface.git
   cd aia-gent-operations-interface
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Project Structure

```
aia-gent-operations-interface/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI component library
│   ├── ChatInterface.tsx # Main chat component
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── Settings.tsx      # Settings panel
│   └── ...               # Other components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎯 Key Components

### Chat Interface
- Real-time messaging with AI agents
- Message history and threading
- File upload support
- Typing indicators

### Knowledge Base
- Document upload and management
- Search and filtering
- Version control
- Integration with AI models

### Team Management
- User roles and permissions
- Team member invitations
- Activity tracking
- Collaboration tools

### Settings Panel
- Theme customization
- Model configuration
- API key management
- System preferences

## 🎨 Design System

The project uses a custom design system with:
- **OKLCH Color Palette**: Modern color space for better accessibility
- **Design Tokens**: Consistent spacing, typography, and colors
- **Component Library**: Reusable UI components
- **Theme Support**: Light, dark, and system themes

## 🚀 Getting Started

1. **Start Development**
   ```bash
   npm run dev
   ```

2. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

3. **Lint and Type Check**
   ```bash
   npm run lint
   npm run type-check
   ```

## 📱 Responsive Design

The interface is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Theme Customization

The project supports multiple themes:
- **Light Mode**: Clean, professional appearance
- **Dark Mode**: Easy on the eyes for extended use
- **System**: Automatically follows OS preference

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact the development team
- Check the documentation

---

**Made with ❤️ by the AI Agent Operations Team** 