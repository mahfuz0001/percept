-- Insert initial technologies
INSERT INTO technologies (name, slug, description, difficulty_level, color, is_active) VALUES
('HTML', 'html', 'HyperText Markup Language - the foundation of web content', 1, '#e34c26', true),
('CSS', 'css', 'Cascading Style Sheets - styling and layout for web pages', 1, '#1572B6', true),
('JavaScript', 'javascript', 'Dynamic programming language for web interactivity', 2, '#F7DF1E', true),
('TypeScript', 'typescript', 'Typed superset of JavaScript for better development experience', 2, '#3178C6', true),
('React', 'react', 'Component-based JavaScript library for building user interfaces', 3, '#61DAFB', true),
('API Integration', 'api-integration', 'Working with REST APIs and external services', 2, '#009688', true);

-- Insert challenge categories
INSERT INTO challenge_categories (name, slug, description, sort_order, is_active) VALUES
('Layout & Structure', 'layout-structure', 'Building page layouts and content structure', 1, true),
('Styling & Design', 'styling-design', 'Visual design and CSS techniques', 2, true),
('Interactive Elements', 'interactive-elements', 'User interactions and dynamic content', 3, true),
('Data Handling', 'data-handling', 'Working with data and APIs', 4, true),
('Performance & Optimization', 'performance-optimization', 'Code optimization and best practices', 5, true);

-- Insert initial achievements
INSERT INTO achievements (name, description, icon, badge_color, points, criteria, is_active) VALUES
('First Steps', 'Complete your first challenge', '🎯', '#3B82F6', 100, '{"type": "challenges_completed", "value": 1}', true),
('HTML Hero', 'Complete 5 HTML challenges', '🌐', '#E34C26', 250, '{"type": "technology_challenges", "technology": "html", "value": 5}', true),
('CSS Master', 'Complete 10 CSS challenges', '🎨', '#1572B6', 500, '{"type": "technology_challenges", "technology": "css", "value": 10}', true),
('JavaScript Ninja', 'Complete 15 JavaScript challenges', '⚡', '#F7DF1E', 750, '{"type": "technology_challenges", "technology": "javascript", "value": 15}', true),
('TypeScript Pro', 'Complete 10 TypeScript challenges', '📘', '#3178C6', 600, '{"type": "technology_challenges", "technology": "typescript", "value": 10}', true),
('React Wizard', 'Complete 20 React challenges', '⚛️', '#61DAFB', 1000, '{"type": "technology_challenges", "technology": "react", "value": 20}', true),
('API Expert', 'Complete 8 API Integration challenges', '🔌', '#009688', 400, '{"type": "technology_challenges", "technology": "api-integration", "value": 8}', true),
('Week Warrior', 'Complete challenges for 7 consecutive days', '🔥', '#F59E0B', 300, '{"type": "streak", "value": 7}', true),
('Problem Solver', 'Complete 50 challenges total', '🏆', '#8B5CF6', 2000, '{"type": "challenges_completed", "value": 50}', true),
('Speed Runner', 'Complete a challenge in under 10 minutes', '⚡', '#10B981', 150, '{"type": "time_limit", "value": 10}', true);

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