<?php

namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class JnjRegCloseShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('cs-jnj-close', function(ShortcodeInterface $sc) {
            
            // Add assets
            //$this->shortcode->addAssets('css', 'plugin://shortcode-ui/css/ui-browser.css');
            
            $output = $this->twig->processTemplate('partials/cs-jnj-close.html.twig');

            return $output;

        });
    }
}