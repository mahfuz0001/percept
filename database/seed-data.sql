-- Enhanced Percept Platform Seed Data
-- This includes data for all new features: badges, community, leaderboards, etc.

-- Insert enhanced technologies with emojis
INSERT INTO technologies (name, slug, description, difficulty_level, color, icon_emoji, is_active) VALUES
('HTML', 'html', 'HyperText Markup Language - the foundation of web content', 1, '#e34c26', '🌐', true),
('CSS', 'css', 'Cascading Style Sheets - styling and layout for web pages', 1, '#1572B6', '🎨', true),
('JavaScript', 'javascript', 'Dynamic programming language for web interactivity', 2, '#F7DF1E', '⚡', true),
('TypeScript', 'typescript', 'Typed superset of JavaScript for better development experience', 2, '#3178C6', '📘', true),
('React', 'react', 'Component-based JavaScript library for building user interfaces', 3, '#61DAFB', '⚛️', true),
('Node.js', 'nodejs', 'JavaScript runtime for server-side development', 3, '#339933', '🟢', true),
('API Integration', 'api-integration', 'Working with REST APIs and external services', 2, '#009688', '🔌', true),
('Database', 'database', 'Data storage and management systems', 3, '#336791', '🗄️', true),
('DevOps', 'devops', 'Deployment, CI/CD, and infrastructure management', 3, '#FF6B6B', '⚙️', true),
('Python', 'python', 'General-purpose programming language', 2, '#3776AB', '🐍', true)
ON CONFLICT (slug) DO UPDATE SET
  description = EXCLUDED.description,
  icon_emoji = EXCLUDED.icon_emoji;

-- Insert enhanced challenge categories with emojis
INSERT INTO challenge_categories (name, slug, description, icon_emoji, sort_order, is_active) VALUES
('Web Fundamentals', 'web-fundamentals', 'HTML, CSS, and basic JavaScript challenges', '🌐', 1, true),
('React & APIs', 'react-apis', 'React components and API integration', '⚛️', 2, true),
('React Advanced', 'react-advanced', 'Advanced React patterns and state management', '🚀', 3, true),
('Backend', 'backend', 'Server-side development and databases', '🔧', 4, true),
('Full Stack', 'full-stack', 'Complete application development', '🏗️', 5, true),
('CSS Mastery', 'css-mastery', 'Advanced CSS techniques and animations', '🎨', 6, true),
('TypeScript', 'typescript', 'Type-safe development challenges', '📘', 7, true),
('DevOps', 'devops', 'Deployment and infrastructure challenges', '⚙️', 8, true),
('AI/ML', 'ai-ml', 'Artificial Intelligence and Machine Learning', '🤖', 9, true),
('Mobile Development', 'mobile', 'Mobile app development challenges', '📱', 10, true)
ON CONFLICT (slug) DO UPDATE SET
  description = EXCLUDED.description,
  icon_emoji = EXCLUDED.icon_emoji;

-- Insert comprehensive achievements system
INSERT INTO achievements (name, description, icon_emoji, badge_color, rarity, points, criteria, category, is_active) VALUES
-- Progress Achievements
('First Steps', 'Complete your first challenge', '🎯', '#3B82F6', 'Common', 100, '{"type": "challenges_completed", "value": 1}', 'progress', true),
('Getting Started', 'Complete 5 challenges', '🚀', '#10B981', 'Common', 250, '{"type": "challenges_completed", "value": 5}', 'progress', true),
('On a Roll', 'Complete 10 challenges', '📈', '#6366F1', 'Uncommon', 500, '{"type": "challenges_completed", "value": 10}', 'progress', true),
('Problem Solver', 'Complete 25 challenges without hints', '🧠', '#8B5CF6', 'Rare', 1000, '{"type": "challenges_without_hints", "value": 25}', 'progress', true),
('Challenge Master', 'Complete 50 challenges', '🏆', '#F59E0B', 'Epic', 2000, '{"type": "challenges_completed", "value": 50}', 'progress', true),
('Legend', 'Complete 100 challenges', '👑', '#EF4444', 'Legendary', 5000, '{"type": "challenges_completed", "value": 100}', 'progress', true),

-- Skill Achievements
('HTML Hero', 'Complete 10 HTML challenges', '🌐', '#E34C26', 'Uncommon', 500, '{"type": "technology_challenges", "technology": "html", "value": 10}', 'skill', true),
('CSS Wizard', 'Complete 15 CSS challenges', '🎨', '#1572B6', 'Rare', 750, '{"type": "technology_challenges", "technology": "css", "value": 15}', 'skill', true),
('JavaScript Ninja', 'Complete 20 JavaScript challenges', '⚡', '#F7DF1E', 'Rare', 1000, '{"type": "technology_challenges", "technology": "javascript", "value": 20}', 'skill', true),
('TypeScript Master', 'Complete 15 TypeScript challenges', '📘', '#3178C6', 'Epic', 1200, '{"type": "technology_challenges", "technology": "typescript", "value": 15}', 'skill', true),
('React Expert', 'Complete 25 React challenges', '⚛️', '#61DAFB', 'Epic', 1500, '{"type": "technology_challenges", "technology": "react", "value": 25}', 'skill', true),
('Full Stack Developer', 'Complete challenges in all major categories', '🏗️', '#6366F1', 'Legendary', 3000, '{"type": "category_coverage", "value": 8}', 'skill', true),

-- Speed Achievements
('Speed Demon', 'Complete a challenge in under 15 minutes', '⚡', '#10B981', 'Uncommon', 300, '{"type": "time_limit", "value": 15}', 'skill', true),
('Lightning Fast', 'Complete a challenge in under 5 minutes', '🏃‍♂️', '#F59E0B', 'Rare', 500, '{"type": "time_limit", "value": 5}', 'skill', true),
('Flash', 'Complete 10 challenges in under 30 minutes each', '⚡', '#EF4444', 'Epic', 1000, '{"type": "speed_challenges", "value": 10}', 'skill', true),

-- Streak Achievements
('Consistency', 'Maintain a 7-day streak', '🔥', '#F59E0B', 'Uncommon', 400, '{"type": "streak", "value": 7}', 'progress', true),
('Dedication', 'Maintain a 14-day streak', '🔥', '#EF4444', 'Rare', 800, '{"type": "streak", "value": 14}', 'progress', true),
('Unstoppable', 'Maintain a 30-day streak', '🔥', '#7C3AED', 'Epic', 1500, '{"type": "streak", "value": 30}', 'progress', true),
('Legendary Streak', 'Maintain a 100-day streak', '🔥', '#1F2937', 'Legendary', 5000, '{"type": "streak", "value": 100}', 'progress', true),

-- Community Achievements
('Helper', 'Answer 5 community questions', '🤝', '#10B981', 'Uncommon', 300, '{"type": "answers_provided", "value": 5}', 'community', true),
('Mentor', 'Answer 25 community questions', '👨‍🏫', '#6366F1', 'Rare', 800, '{"type": "answers_provided", "value": 25}', 'community', true),
('Guru', 'Answer 100 community questions', '🧙‍♂️', '#8B5CF6', 'Epic', 2000, '{"type": "answers_provided", "value": 100}', 'community', true),
('Community Legend', 'Earn 1000 reputation points', '⭐', '#F59E0B', 'Legendary', 3000, '{"type": "reputation", "value": 1000}', 'community', true),

-- Special Achievements
('Early Adopter', 'Join the platform in its first month', '🌟', '#8B5CF6', 'Special', 1000, '{"type": "join_date", "before": "2024-02-01"}', 'special', true),
('Beta Tester', 'Report a bug or provide feedback', '🐛', '#10B981', 'Special', 500, '{"type": "feedback_provided", "value": 1}', 'special', true),
('Perfectionist', 'Complete 10 challenges with 100% score', '💯', '#EF4444', 'Epic', 1500, '{"type": "perfect_scores", "value": 10}', 'skill', true)
ON CONFLICT (name) DO UPDATE SET
  description = EXCLUDED.description,
  icon_emoji = EXCLUDED.icon_emoji,
  badge_color = EXCLUDED.badge_color,
  rarity = EXCLUDED.rarity,
  points = EXCLUDED.points,
  criteria = EXCLUDED.criteria,
  category = EXCLUDED.category;

-- Insert sample learning paths
DO $$
DECLARE
    html_tech_id UUID;
    css_tech_id UUID;
    js_tech_id UUID;
    react_tech_id UUID;
    ts_tech_id UUID;
BEGIN
    -- Get technology IDs
    SELECT id INTO html_tech_id FROM technologies WHERE slug = 'html';
    SELECT id INTO css_tech_id FROM technologies WHERE slug = 'css';
    SELECT id INTO js_tech_id FROM technologies WHERE slug = 'javascript';
    SELECT id INTO react_tech_id FROM technologies WHERE slug = 'react';
    SELECT id INTO ts_tech_id FROM technologies WHERE slug = 'typescript';

    -- Insert learning paths
    INSERT INTO learning_paths (
        name, description, difficulty_level, estimated_duration_hours, 
        technology_id, challenge_sequence, is_published, enrollment_count, rating
    ) VALUES
    (
        'Web Development Fundamentals',
        'Master HTML, CSS, and JavaScript from scratch with hands-on projects',
        1,
        40,
        html_tech_id,
        '{}',
        true,
        1240,
        4.8
    ),
    (
        'CSS Mastery Path',
        'Become a CSS expert with advanced layouts, animations, and responsive design',
        2,
        25,
        css_tech_id,
        '{}',
        true,
        678,
        4.9
    ),
    (
        'JavaScript Deep Dive',
        'Master modern JavaScript, ES6+, async programming, and best practices',
        2,
        35,
        js_tech_id,
        '{}',
        true,
        892,
        4.7
    ),
    (
        'React Mastery Journey',
        'Build modern web applications with React, hooks, context, and ecosystem',
        3,
        50,
        react_tech_id,
        '{}',
        true,
        564,
        4.9
    ),
    (
        'TypeScript for Professionals',
        'Level up your JavaScript with TypeScript type safety and advanced features',
        3,
        30,
        ts_tech_id,
        '{}',
        true,
        423,
        4.8
    );
END $$;

-- Insert sample community questions
DO $$
DECLARE
    user1_id UUID := uuid_generate_v4();
    user2_id UUID := uuid_generate_v4();
    user3_id UUID := uuid_generate_v4();
BEGIN
    -- Insert sample users for community content
    INSERT INTO users (
        id, clerk_user_id, email, username, full_name, avatar_emoji, 
        bio, specialization, is_public, total_xp, current_level
    ) VALUES
    (
        user1_id,
        'user_sample1',
        'sarah@example.com',
        'sarah_dev',
        'Sarah Chen',
        '👩‍💻',
        'Frontend developer passionate about React and TypeScript',
        'Frontend',
        true,
        2450,
        3
    ),
    (
        user2_id,
        'user_sample2', 
        'marcus@example.com',
        'marcus_fullstack',
        'Marcus Rodriguez',
        '🚀',
        'Full-stack developer building scalable web applications',
        'Full Stack',
        true,
        3200,
        4
    ),
    (
        user3_id,
        'user_sample3',
        'elena@example.com', 
        'elena_backend',
        'Elena Petrov',
        '⚙️',
        'Backend engineer focused on API design and database optimization',
        'Backend',
        true,
        2890,
        3
    );

    -- Insert sample community questions
    INSERT INTO community_questions (
        title, content, author_id, tags, votes, views, answer_count, 
        has_accepted_answer, ai_suggested, created_at
    ) VALUES
    (
        'How to handle async operations in React without useEffect?',
        'I''ve been struggling with managing async data fetching in React components. I know useEffect can work, but I''ve heard there are better patterns like React Query or SWR. What are the pros and cons of each approach?',
        user1_id,
        ARRAY['React', 'Async', 'Best Practices', 'Data Fetching'],
        15,
        342,
        7,
        true,
        true,
        NOW() - INTERVAL '2 hours'
    ),
    (
        'TypeScript generic constraints: When and how to use them?',
        'I''m working on a TypeScript project and keep seeing generic constraints like `T extends SomeType`. Can someone explain when and why I should use them? Are there performance implications?',
        user2_id,
        ARRAY['TypeScript', 'Generics', 'Type Safety'],
        8,
        156,
        3,
        false,
        false,
        NOW() - INTERVAL '4 hours'
    ),
    (
        'Database design for scalable chat application',
        'Building a real-time chat app and wondering about the best database schema design. Should I use SQL or NoSQL? How to handle message threading, user relationships, and real-time updates efficiently?',
        user3_id,
        ARRAY['Database', 'Architecture', 'Chat App', 'Scalability', 'Real-time'],
        23,
        891,
        12,
        true,
        true,
        NOW() - INTERVAL '1 day'
    ),
    (
        'CSS Grid vs Flexbox: Practical decision framework?',
        'I''m always confused about when to use CSS Grid versus Flexbox. Can someone share a practical decision framework or real examples of when each one is the better choice?',
        user1_id,
        ARRAY['CSS', 'Layout', 'Responsive Design', 'Grid', 'Flexbox'],
        12,
        267,
        5,
        false,
        false,
        NOW() - INTERVAL '6 hours'
    ),
    (
        'Best practices for API error handling in frontend apps',
        'What''s the standard way to handle API errors in modern frontend applications? Should I use try-catch everywhere, implement a global error handler, or use libraries like React Error Boundary?',
        user2_id,
        ARRAY['API', 'Error Handling', 'Frontend', 'Best Practices', 'React'],
        19,
        523,
        9,
        false,
        true,
        NOW() - INTERVAL '3 hours'
    );
END $$;

-- Insert sample challenges for the expanded system
DO $$
DECLARE
    web_fundamentals_cat_id UUID;
    react_apis_cat_id UUID;
    full_stack_cat_id UUID;
    html_tech_id UUID;
    css_tech_id UUID;
    js_tech_id UUID;
    react_tech_id UUID;
    ts_tech_id UUID;
BEGIN
    -- Get category and technology IDs
    SELECT id INTO web_fundamentals_cat_id FROM challenge_categories WHERE slug = 'web-fundamentals';
    SELECT id INTO react_apis_cat_id FROM challenge_categories WHERE slug = 'react-apis';
    SELECT id INTO full_stack_cat_id FROM challenge_categories WHERE slug = 'full-stack';
    
    SELECT id INTO html_tech_id FROM technologies WHERE slug = 'html';
    SELECT id INTO css_tech_id FROM technologies WHERE slug = 'css';
    SELECT id INTO js_tech_id FROM technologies WHERE slug = 'javascript';
    SELECT id INTO react_tech_id FROM technologies WHERE slug = 'react';
    SELECT id INTO ts_tech_id FROM technologies WHERE slug = 'typescript';

    -- Insert sample challenges
    INSERT INTO challenges (
        title, slug, description, difficulty_level, category_id, technology_id,
        problem_statement, requirements, starter_code, points, tags, 
        technologies_used, estimated_time_minutes, is_published
    ) VALUES
    -- Web Fundamentals
    (
        'Build a Todo App',
        'build-todo-app',
        'Create a functional todo application with add, delete, and mark complete features',
        1,
        web_fundamentals_cat_id,
        js_tech_id,
        'Build a todo application that allows users to add new tasks, mark them as complete, and delete them. The interface should be clean and responsive.',
        ARRAY['Add new todos', 'Mark todos as complete/incomplete', 'Delete todos', 'Filter todos (all/active/completed)', 'Responsive design'],
        '<!DOCTYPE html>\n<html>\n<head>\n    <title>Todo App</title>\n</head>\n<body>\n    <!-- Your code here -->\n</body>\n</html>',
        150,
        ARRAY['JavaScript', 'DOM', 'Events'],
        ARRAY['HTML', 'CSS', 'JavaScript'],
        90,
        true
    ),
    (
        'Responsive Portfolio',
        'responsive-portfolio',
        'Design and build a responsive portfolio website showcasing your projects',
        1,
        web_fundamentals_cat_id,
        css_tech_id,
        'Create a personal portfolio website that looks great on all devices. Include sections for about, projects, and contact information.',
        ARRAY['Mobile-first responsive design', 'Navigation menu', 'Project showcase grid', 'Contact form', 'Smooth scrolling'],
        '<!DOCTYPE html>\n<html>\n<head>\n    <title>My Portfolio</title>\n    <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n    <!-- Build your portfolio here -->\n</body>\n</html>',
        200,
        ARRAY['CSS', 'Responsive', 'Portfolio'],
        ARRAY['HTML', 'CSS'],
        120,
        true
    ),
    -- React & APIs
    (
        'Weather Dashboard',
        'weather-dashboard',
        'Build a weather app that fetches data from an API and displays current conditions',
        2,
        react_apis_cat_id,
        react_tech_id,
        'Create a weather dashboard that allows users to search for weather information by city. Display current conditions, forecast, and use real weather API data.',
        ARRAY['Search functionality', 'API integration', 'Error handling', 'Loading states', 'Responsive design'],
        'import React from "react";\n\nfunction WeatherApp() {\n  // Your code here\n  return (\n    <div>\n      <h1>Weather Dashboard</h1>\n    </div>\n  );\n}\n\nexport default WeatherApp;',
        250,
        ARRAY['React', 'API', 'Weather'],
        ARRAY['React', 'JavaScript', 'CSS'],
        150,
        true
    ),
    -- Full Stack
    (
        'Blog Platform',
        'blog-platform',
        'Build a complete blog platform with CMS, user authentication, and SEO optimization',
        4,
        full_stack_cat_id,
        react_tech_id,
        'Create a full-featured blog platform where users can write, edit, and publish blog posts. Include user authentication, commenting system, and SEO features.',
        ARRAY['User authentication', 'CRUD operations for posts', 'Rich text editor', 'Comment system', 'SEO optimization', 'Admin dashboard'],
        '// This is a complex full-stack challenge\n// You will need to set up both frontend and backend\n\n// Frontend (React)\nfunction BlogApp() {\n  return <div>Blog Platform</div>;\n}\n\n// Backend setup instructions will be provided',
        600,
        ARRAY['Full Stack', 'Authentication', 'CMS'],
        ARRAY['React', 'Node.js', 'Database', 'Authentication'],
        480,
        true
    );
END $$;

-- Insert sample HTML challenges
DO $$
DECLARE
    html_tech_id UUID;
    layout_cat_id UUID;
    styling_cat_id UUID;
BEGIN
    -- Get technology and category IDs
    SELECT id INTO html_tech_id FROM technologies WHERE slug = 'html';
    SELECT id INTO layout_cat_id FROM challenge_categories WHERE slug = 'layout-structure';
    SELECT id INTO styling_cat_id FROM challenge_categories WHERE slug = 'styling-design';

    -- Insert HTML challenges
    INSERT INTO challenges (
        title, slug, description, difficulty_level, category_id, technology_id,
        problem_statement, requirements, starter_code, points, tags, is_published
    ) VALUES
    (
        'Personal Portfolio Header',
        'personal-portfolio-header',
        'Create a professional header section for a personal portfolio website',
        1,
        layout_cat_id,
        html_tech_id,
        'Build a header section that includes your name, a brief tagline, and navigation links. This header should be semantic and accessible.',
        ARRAY['Use semantic HTML5 elements', 'Include proper heading hierarchy', 'Add navigation with at least 4 links', 'Include a professional tagline or subtitle'],
        '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Portfolio</title>
</head>
<body>
    <!-- Build your header here -->
    
</body>
</html>',
        100,
        ARRAY['html', 'semantic', 'portfolio', 'header'],
        true
    ),
    (
        'Contact Form Structure',
        'contact-form-structure',
        'Build a complete contact form with proper validation attributes',
        1,
        layout_cat_id,
        html_tech_id,
        'Create a contact form that collects name, email, subject, and message. Use appropriate input types and validation attributes.',
        ARRAY['Use proper form structure', 'Include all required input types', 'Add proper labels for accessibility', 'Include client-side validation attributes'],
        '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
</head>
<body>
    <!-- Create your contact form here -->
    
</body>
</html>',
        150,
        ARRAY['html', 'forms', 'validation', 'accessibility'],
        true
    );
END $$;

-- Insert sample CSS challenges
DO $$
DECLARE
    css_tech_id UUID;
    styling_cat_id UUID;
    layout_cat_id UUID;
BEGIN
    -- Get technology and category IDs
    SELECT id INTO css_tech_id FROM technologies WHERE slug = 'css';
    SELECT id INTO styling_cat_id FROM challenge_categories WHERE slug = 'styling-design';
    SELECT id INTO layout_cat_id FROM challenge_categories WHERE slug = 'layout-structure';

    -- Insert CSS challenges
    INSERT INTO challenges (
        title, slug, description, difficulty_level, category_id, technology_id,
        problem_statement, requirements, starter_code, points, tags, is_published
    ) VALUES
    (
        'Responsive Card Component',
        'responsive-card-component',
        'Design a responsive card component that works on all screen sizes',
        2,
        styling_cat_id,
        css_tech_id,
        'Create a card component with an image, title, description, and button. Make it responsive and visually appealing.',
        ARRAY['Use CSS Grid or Flexbox for layout', 'Implement responsive design', 'Add hover effects', 'Include proper spacing and typography'],
        '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Component</title>
    <style>
        /* Add your CSS here */
        
    </style>
</head>
<body>
    <div class="card">
        <img src="https://picsum.photos/300/200" alt="Card image">
        <div class="card-content">
            <h2>Card Title</h2>
            <p>This is the card description that should be styled nicely.</p>
            <button>Learn More</button>
        </div>
    </div>
</body>
</html>',
        200,
        ARRAY['css', 'responsive', 'components', 'layout'],
        true
    );
END $$;

-- Insert sample JavaScript challenges
DO $$
DECLARE
    js_tech_id UUID;
    interactive_cat_id UUID;
BEGIN
    -- Get technology and category IDs
    SELECT id INTO js_tech_id FROM technologies WHERE slug = 'javascript';
    SELECT id INTO interactive_cat_id FROM challenge_categories WHERE slug = 'interactive-elements';

    -- Insert JavaScript challenges
    INSERT INTO challenges (
        title, slug, description, difficulty_level, category_id, technology_id,
        problem_statement, requirements, starter_code, points, tags, is_published
    ) VALUES
    (
        'Todo List Manager',
        'todo-list-manager',
        'Build a functional todo list with add, complete, and delete functionality',
        2,
        interactive_cat_id,
        js_tech_id,
        'Create a todo list where users can add new tasks, mark them as complete, and delete them. No frameworks allowed - vanilla JavaScript only.',
        ARRAY['Add new todos via input field', 'Toggle completion status', 'Delete individual todos', 'Persist state in localStorage'],
        '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
        .todo-item { margin: 10px 0; padding: 10px; border: 1px solid #ddd; }
        .completed { text-decoration: line-through; opacity: 0.6; }
        button { margin-left: 10px; }
    </style>
</head>
<body>
    <h1>My Todo List</h1>
    <input type="text" id="todoInput" placeholder="Add a new todo...">
    <button onclick="addTodo()">Add</button>
    <div id="todoList"></div>

    <script>
        // Add your JavaScript code here
        
    </script>
</body>
</html>',
        250,
        ARRAY['javascript', 'dom', 'events', 'localStorage'],
        true
    );
END $$;