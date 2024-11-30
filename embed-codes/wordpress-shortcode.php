<?php
/**
 * Plugin Name: Chimney Calculator Embeds
 * Description: Shortcodes for embedding chimney calculators
 * Version: 1.0
 * Author: Your Name
 */

function chimney_repair_calculator_shortcode() {
    $calculator_url = 'YOUR_NETLIFY_URL/repair-calculator';
    return get_calculator_iframe($calculator_url, 'Chimney Repair Cost Calculator');
}
add_shortcode('chimney_repair_calculator', 'chimney_repair_calculator_shortcode');

function chimney_building_calculator_shortcode() {
    $calculator_url = 'YOUR_NETLIFY_URL/building-calculator';
    return get_calculator_iframe($calculator_url, 'Chimney Building Calculator');
}
add_shortcode('chimney_building_calculator', 'chimney_building_calculator_shortcode');

function chimney_creosote_calculator_shortcode() {
    $calculator_url = 'YOUR_NETLIFY_URL/creosote-estimator';
    return get_calculator_iframe($calculator_url, 'Creosote Buildup Estimator');
}
add_shortcode('chimney_creosote_calculator', 'chimney_creosote_calculator_shortcode');

function chimney_maintenance_calculator_shortcode() {
    $calculator_url = 'YOUR_NETLIFY_URL/maintenance-estimator';
    return get_calculator_iframe($calculator_url, 'Maintenance Cost Calculator');
}
add_shortcode('chimney_maintenance_calculator', 'chimney_maintenance_calculator_shortcode');

function chimney_flue_calculator_shortcode() {
    $calculator_url = 'YOUR_NETLIFY_URL/flue-calculator';
    return get_calculator_iframe($calculator_url, 'Flue Size Calculator');
}
add_shortcode('chimney_flue_calculator', 'chimney_flue_calculator_shortcode');

function get_calculator_iframe($url, $title) {
    return '<div class="chimney-calculator-wrapper">
        <iframe 
            src="' . esc_url($url) . '" 
            width="100%" 
            height="800"
            frameborder="0"
            style="border: none; width: 100%; min-height: 800px;"
            title="' . esc_attr($title) . '"
            loading="lazy"
        ></iframe>
    </div>';
}

// Add custom CSS
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