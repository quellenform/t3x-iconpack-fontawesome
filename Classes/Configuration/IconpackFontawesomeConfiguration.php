<?php

declare(strict_types=1);

namespace Quellenform\IconpackFontawesome\Configuration;

/*
 * This file is part of the "iconpack_fontawesome" Extension for TYPO3 CMS.
 *
 * Conceived and written by Stephan Kellermayr
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 */

use Quellenform\Iconpack\IconpackConfigurationInterface;

/**
 * Class IconpackFontawesomeConfiguration
 */
class IconpackFontawesomeConfiguration implements IconpackConfigurationInterface
{
    /**
     * Replace category labels with translated text from XLIFF.
     *
     * @param string $iconpackIdentifier
     * @param array $configuration
     *
     * @return array
     */
    public function configureIconpack(string $iconpackIdentifier, array $configuration): array
    {
        foreach ($configuration['categories'] as $key => $category) {
            $configuration['categories'][$key]['label']
                = 'LLL:EXT:iconpack_fontawesome/Resources/Private/Language/locallang_be.xlf:cat.' . $key;
        }
        return $configuration;
    }
}
