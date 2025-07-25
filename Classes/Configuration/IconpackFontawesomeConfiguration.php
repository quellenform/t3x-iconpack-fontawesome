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
use TYPO3\CMS\Core\Configuration\ExtensionConfiguration;
use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * Class IconpackFontawesomeConfiguration
 */
class IconpackFontawesomeConfiguration implements IconpackConfigurationInterface
{
    /**
     * Replace category labels with translated text from XLIFF and override styles from extConf.
     *
     * @param string $iconpackIdentifier
     * @param array $configuration
     *
     * @return array
     */
    public function configureIconpack(string $iconpackIdentifier, array $configuration): array
    {
        if (isset($configuration['categories']) && is_array($configuration['categories'])) {
            foreach ($configuration['categories'] as $key => $category) {
                $configuration['categories'][$key]['label']
                    = 'LLL:EXT:iconpack_fontawesome/Resources/Private/Language/locallang_be.xlf:cat.' . $key;
            }
        }
        /** @var ExtensionConfiguration $extConf */
        $extConf = GeneralUtility::makeInstance(ExtensionConfiguration::class);
        $stylesEnabled = (string) trim($extConf->get('iconpack_fontawesome', 'stylesEnabled'));
        if (!empty($stylesEnabled)) {
            $configuration['stylesEnabled'] = $stylesEnabled;
        }
        return $configuration;
    }
}
