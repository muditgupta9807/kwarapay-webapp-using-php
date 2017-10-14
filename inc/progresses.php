<?php if (count($progresses) > 0): ?>
	<div class = "progress">
		<?php foreach ($progresses as $progress): ?> 
			<p> <?php echo $progress; ?> </p>
		<?php endforeach ?>
	</div>
<?php endif ?>