<?php

namespace Grav\Plugin\Shortcodes;
use Thunder\Shortcode\Shortcode\ShortcodeInterface;

class PrintSiteConfigField extends Shortcode
{
    public function init()
    {
        $this->shortcode->getHandlers()->add('site-config', function(ShortcodeInterface $sc) {
            
            // Add assets
            //$this->shortcode->addAssets('css', 'plugin://shortcode-ui/css/ui-browser.css');
            
            $output = $this->twig->processTemplate('partials/site-config-field.html.twig', [
              'fieldName' => $sc->getParameter('field'),
              ]);

            return $output;

        });
    }
}