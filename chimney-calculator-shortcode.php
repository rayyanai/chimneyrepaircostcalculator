<?php
function chimney_calculator_shortcode() {
    $calculator_url = 'YOUR_NETLIFY_URL';
    
    return '<div class="chimney-calculator-wrapper">
        <iframe 
            src="' . esc_url($calculator_url) . '" 
            width="100%" 
            height="800"
            frameborder="0"
            style="border: none; width: 100%; min-height: 800px;"
            title="Chimney Repair Cost Calculator"
        ></iframe>
    </div>';
}
add_shortcode('chimney_calculator', 'chimney_calculator_shortcode');

// Optional: Add custom CSS
function chimney_calculator_styles() {
    echo '<style>
        .chimney-calculator-wrapper {
            max-width: 100%;
            margin: 2rem auto;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
    </style>';
}
add_action('wp_head', 'chimney_calculator_styles');
?>