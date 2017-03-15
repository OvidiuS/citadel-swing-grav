<?php
namespace Grav\Plugin;

use Grav\Common\Plugin;
use RocketTheme\Toolbox\Event\Event;

/**
 * Class FoxyCartHMACEncodingPlugin
 * @package Grav\Plugin
 */
class FoxyCartHMACEncodingPlugin extends Plugin
{
    public static function getSubscribedEvents()
    {
        return [
            'onTwigExtensions' => ['onTwigExtensions', 0]
        ];
    }
    public function onTwigExtensions()
    {
        require_once(__DIR__ . '/twig/FcHmacField.php');
        $this->grav['twig']->twig->addExtension(new FcHmacField());
    }
}