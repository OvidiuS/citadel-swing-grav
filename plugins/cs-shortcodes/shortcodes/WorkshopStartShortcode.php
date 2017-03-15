<?php

namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class WorkshopStartShortcode extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('cs-workshop-start', function(ShortcodeInterface $sc) {
            
            // Add assets
            //$this->shortcode->addAssets('css', 'plugin://shortcode-ui/css/ui-browser.css');
            
            $output = $this->twig->processTemplate('partials/cs-workshop-start.html.twig');

            return $output;

        });
    }
}