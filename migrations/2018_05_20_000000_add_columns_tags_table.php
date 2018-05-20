<?php

/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Flarum\Database\Migration;

return Migration::addColumns(
    'tags',
		['tag_hero_pos' => ['string', 'length' => 100, 'nullable' => true], 'tile_hero_pos' => ['string', 'length' => 100, 'nullable' => true]]
);
